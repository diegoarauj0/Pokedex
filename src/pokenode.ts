import { MainClient, ClientArgs } from "pokenode-ts"

interface clientProps extends ClientArgs {
    limit:number
}

class Client extends MainClient {

    public readonly limit?:number

    constructor(props?:clientProps) {
        super(props)
        this.limit = props?.limit
    }
}

const client = new Client({
    limit:898
})

export default client