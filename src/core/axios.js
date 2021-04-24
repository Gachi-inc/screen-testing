import axios from 'axios';
export default {
    postScreenshotImage: async(image) => await axios.post("192.168.1.7:6543" + "", image),
    getScreenshotDataDifference: async() => await axios.get(currentServer + "").then(res => {return res.data}),
    createMasterScreenshot: async(imageMaster) => await axios.post(currentServer + "", imageMaster).then(res => {}),
    addSiteToList: async(newLink) => await axios.post("192.168.1.7:6543" + "", newLink).then(res => {return res.data.list}),
    getList: async() => await axios.get("192.168.1.7:6543" ).then(res => {return res}),
    deleteSiteFromList: async(link) => await axios.delete(currentServer + "", link).then(res => {return res.data.list}),
    //put запросы пока не использованы
}