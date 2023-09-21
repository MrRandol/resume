import { Observable } from "rxjs";

export class FetchHelper {

  static getObservableFromFetch<T>(url): Observable<T>{
    return new Observable(observer => {
      //Make use of Fetch API to get data from URL
      fetch(url)
        .then(res => {
          /*The response.json() doesn't return json, it returns a "readable stream" which is a promise which needs to be resolved to get the actual data.*/
          return res.json();
        })
        .then(body => {
          observer.next(body as T);
          /*Complete the Observable as it won't produce any more event */
          observer.complete();
        })
        //Handle error
        .catch(err => observer.error(err));
    })
  }

}
