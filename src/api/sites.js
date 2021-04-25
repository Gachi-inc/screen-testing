import axios from "../core/axios"

const server = "http://192.168.1.202:6543/api"

export default {
    postScreenshotImage: async(image) => await axios.post(server + "", image),
    // getScreenshotDataDifference: async() => await axios.get(currentServer + "").then(res => {return res.data}),
    // createMasterScreenshot: async(imageMaster) => await axios.post(currentServer + "", imageMaster).then(res => {}),
    addSiteToList: async(site) => await axios.post(server + "/screenshots", site).then(res => {return res.data}),
    startTesting: async(url) => await axios.post(server + '/testing', {url})
    //getList: async() => await axios.get(server + '/testing' ).then(res => {return res}),
    //deleteSiteFromList: async(link) => await axios.delete(currentServer + "", link).then(res => {return res.data.list}),
    //put запросы пока не использованы
}