import config from "./config";

import axios from "axios";

export default class Data {
    //Here is where we sill create the api interfacing functions

    async getUser() {
        //This function will use Axios to get data from API
        console.log("Pretending to fetch data from API...");
    }

    async createUser(user) { 
        // This function will create a user by posting to API via Axios
        console.log("Pretending to create User");
        // const response = await this.api('/users', 'POST', user);
        const response = await axios.post(config.apiBaseUrl + `/users`, {
            firstName: user.firstName,
            lastName: user.lastName,
            emailAddress: user.emailAddress,
            password: user.password
        });
        console.log("Response Status: ", response);
        if (response.status === 201) {
        return [];
        }
        else if (response.status === 400) {
        return response.json().then(data => {
            return data.errors;
        });
        }
        else {
        throw new Error();
    }
    }
}