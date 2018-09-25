export class Coracao {
    constructor(
        public cheio: boolean,
        public UrlCoracaoCheio: string = '/assets/coracao_cheio.png',
        public UrlCoracaoVazio: string = '/assets/coracao_vazio.png'
    ) { }

    public exibeCoracao(): string {
        return this.cheio ? this.UrlCoracaoCheio : this.UrlCoracaoVazio;
    }
}