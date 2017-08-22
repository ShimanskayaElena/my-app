export class News {
    constructor(
        public id: number,
        public heading: string,
        public body: string,
        public src?: string
    ) {}
}
