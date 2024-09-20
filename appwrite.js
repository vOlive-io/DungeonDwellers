import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66ec18fc0015b7a013d5'); 

export const account = new Account(client);
export { ID } from 'appwrite';
