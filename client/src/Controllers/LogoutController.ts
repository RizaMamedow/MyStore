import {Cookie} from "../Utils/Cookie";


export default function logout(): void {
    if(Cookie.get('user_token') != undefined){
        Cookie.remove('user_token')
    }
    window.location.reload();
}