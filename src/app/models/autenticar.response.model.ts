export class AutenticarResponse {
    idUsuario: string = '';
    nome: string = '';
    email: string = '';
    accessToken: string = '';
    createdAt: Date | null = null;
    expiration: Date | null = null;
}