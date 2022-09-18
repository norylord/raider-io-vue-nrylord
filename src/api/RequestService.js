import FetchService from './FetchService';

class RequestService {
    character(cfg) {
        let url = new URL(`https://raider.io/api/v1/characters/profile`)
        const params = {
            name: cfg.name || '',
            region: cfg.region || '',
            realm: cfg.realm || ''
        }
        url.search = new URLSearchParams(params)
        return FetchService.getData(url);
    }

    guild(cfg) {
        let url = new URL(`https://raider.io/api/v1/guilds/profile`)
        const params = {
            name: cfg.name || '',
            region: cfg.region || '',
            realm: cfg.realm || '',
            fields: 'raid_progression'
        }
        url.search = new URLSearchParams(params)
        return FetchService.getData(url);
    }

}

export default new RequestService();