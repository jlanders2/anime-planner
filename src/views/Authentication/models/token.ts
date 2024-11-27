export interface IAnilistJwtToken { 
    aud: string;
    exp: number;
    iat: number;
    jti: string;
    nbf: number;
    scopes: any;
    sub: string;
}