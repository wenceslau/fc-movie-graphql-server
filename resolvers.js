import fetch from 'node-fetch';

const API_URL = 'https://codeflix-api-inky.vercel.app';

const resolvers = {
    Query: {
        async movie(_, { id }) {
            console.log("movie",genre, limit)
            const response = await fetch(`${API_URL}/movies/${id}`);
            return response.json();
        },
        async featuredMovie(_, { id }) {
            const response = await fetch(`${API_URL}/featured/${id}`);
            return response.json();
        },
        async moviesByGenre(_, { genre, limit }) {
            console.log("moviesByGenre",genre, limit)
            let url =  new URL(`${API_URL}/movies`);
            url.searchParams.append('genre', genre);
            if (limit) {
                url.searchParams.append('_limit', limit);
            }
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch movies');
            }
            return response.json();
        },
        async moviesSearch(_,{title, genre, limit}){
            console.log("movies",title, genre, limit)
            let url =  new URL(`${API_URL}/movies`);
            if (title) {
                url.searchParams.append('title_like', title);
            }
            if (genre) {
                url.searchParams.append('genre_like', genre);
            }
            if (limit) {
                url.searchParams.append('_limit', limit);
            }
            const response = await fetch(url);
            return response.json();
        }
    },

}

export default resolvers;