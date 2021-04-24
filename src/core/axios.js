import axios from 'axios';
export default {
    postScreenshotImage: async(image) => await axios.post(currentServer + "", image),
    getScreenshotDataDifference: async() => await axios.get(currentServer + "").then(res => {return res.data}),
    createMasterScreenshot: async(imageMaster) => await axios.post(currentServer + "", imageMaster).then(res => {}),
    addSiteToList: async(newLink) => await axios.post(currentServer + "", newLink).then(res => {return res.data.list}),
    deleteSiteFromList: async(link) => await axios.delete(currentServer + "", link).then(res => {return res.data.list}),
    //put запросы пока не использованы
}