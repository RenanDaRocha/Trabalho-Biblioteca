import React, { Component } from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: "https://library-mobile-server.herokuapp.com/"
})

export default api