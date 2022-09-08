import axios from "axios"
import { writeFile } from "fs"
import { JSDOM } from "jsdom"

interface IPageInfo {
    url: string
}

const url = "https://devgo.com.br"

axios.get(url)
    .then(axiosResponse => {
        const html = axiosResponse.data

        const { window } = new JSDOM(html)
        const { document } = window

        const articles: Element[] = [...document.getElementsByClassName('blog-article-card') as any]
        const pageInfos: IPageInfo[] = articles.map(artigo => {
            const aElement = artigo.getElementsByTagName('a')[1]

            const path = aElement.getAttribute('href')
            const url = 'https://devgo.com.br' + path

            const pageUrl: IPageInfo = {
                url
            }
            return pageUrl
            
    })   
    console.log(pageInfos)
    writeFile('Urls.JSON', JSON.stringify(pageInfos), err => {
        if(err) {
            console.log('Houve um erro')
        }
    } )
    }) 
