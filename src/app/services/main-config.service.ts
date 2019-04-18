import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainConfigService {
  public mainEndPoint:String="https://serene-wave-76375.herokuapp.com/api/";

  constructor() { }
}
