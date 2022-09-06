import config from "./config";

import axios from "axios";

export default class Data {
    //Here is where we sill create the api interfacing functions
    api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
        const url = config.apiBaseUrl + path;
        
        const options = {
          url, 
          method,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
          },
        };
    
        if (body !== null) {
          options.data = JSON.stringify(body);
          //console.log("Options Body: ", options.body);
        }
        // checks if requiresAuth is truthy (or considered true):
        if (requiresAuth) {
          const encodedCredentials =  btoa(`${credentials.username}:${credentials.password}`); 
          options.headers['Authorization'] = `Basic ${encodedCredentials}`;  
    
        }
        
        return axios(options);
      }

    async getUser(username, password) {
        //This function will use Axios to get data from API
        console.log("Pretending to fetch data from API...");
        const response = await this.api(`/users`, 'GET', null, true, { username, password });
    }

    async createUser(user) { 
        // This function will create a user by posting to API via Axios
        console.log("Pretending to create User");
        // const response = await this.api('/users', 'POST', user);
        const response = await this.api('/users', "POST", {
            firstName: user.firstName,
            lastName: user.lastName,
            emailAddress: user.emailAddress,
            password: user.password,
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