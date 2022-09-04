import config from "./config";

export default class Data {
    //Here is where we sill create the api interfacing functions

    async getUser() {
        //This function will use Axios to get data from API
        console.log("Pretending to fetch data from API...");
    }

    async createUser() { 
        // This function will create a user by posting to API via Axios
        console.log("Pretending to create User");
    }
}