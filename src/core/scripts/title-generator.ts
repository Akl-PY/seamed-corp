import { SITE_CONFIG } from "../../config/site";

export default function titleGenerator(title:string){
    return `${title} - ${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`
}