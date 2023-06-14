export interface IHeader {
    isAuthenticated: boolean;
}

type FeauturesCardIcon = 'list' | 'bolt' | 'soft';

export interface IFeauturesCard {
    icon: FeauturesCardIcon;
    text: string;
}

export interface IErrorResponse {
    code: number;
    detail: any;
}

export interface IConsumerValidatorResponse {
    email?: string;
    username?: string;
    password?: string;
}

export interface ISuccessAlert {
    text: string;
    isSignUpPage: boolean;
}