import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environment';

export class BaseHttpService {

  public baseUrl: string = environments.baseUrl;
  constructor() { }

  public getHeaders(): HttpHeaders {
    const token = localStorage.getItem("token");
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    if (token) {
      headers = headers.set("Authorization", `bearer ${token}`)
    }

    return headers;
  }

}
