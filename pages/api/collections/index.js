import { collection } from "../../../data/collection";

export default function handler(req,res){
    res.status(200).json(collection)
}