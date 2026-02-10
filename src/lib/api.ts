import { GraphQLClient } from 'graphql-request';

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export const client = new GraphQLClient(API_URL || '');

export const fetchAPI = async (query: string, variables = {}) => {
    if (!API_URL) return null; // Fallback to mock data if no API
    return await client.request(query, variables);
};
