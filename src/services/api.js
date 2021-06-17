import React, { Component } from 'react'
import axios from 'axios';
import {AsyncStorage} from 'react-native'

const api = axios.create({
    baseURL: "https://library-mobile-server.herokuapp.com/"
});

api.interceptors.request.use( async config => {
    const token = await AsyncStorage.getItem('token');
    config.headers.Authorization = `token ${token}`;
    return config;
});

export default api