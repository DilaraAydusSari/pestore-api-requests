class Data {

    headerPayload() {

        const headerBody = {
            "accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        }
        return headerBody;
    }

    errorHeaderPayload() {
        const errorHeader = {
            "accept": "application/json",
            "Content-Type": "application/json"
        }
        return errorHeader;
    }

    samePetHeaderPayload() {
        const samePetHeader = {
            "accept": "application/json"
        }
        return samePetHeader;
    }

    dogData() {
        const dogBody = {
            "id": 907,
            "category": {
                "id": 71,
                "name": "dog"
            },
            "name": "Beagle",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 711,
                    "name": "Gary"
                }
            ],
            "status": "available"
        }
        return dogBody;
    }

    birdData() {
        const birdBody = {
            "id": 908,
            "category": {
                "id": 72,
                "name": "bird"
            },
            "name": "Parrot",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 721,
                    "name": "Papi"
                }
            ],
            "status": "sold"
        }
        return birdBody;
    }

    updateFormData() {
        const updateBody = {
            "name": "Beagle",
            "status": "sold"
        }
        return updateBody;
    }

    updateStatusData(status) {
        const birdBody = {
            "id": 908,
            "category": {
                "id": 72,
                "name": "bird"
            },
            "name": "Parrot",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 721,
                    "name": "Papi"
                }
            ],
            "status": status
        }
        return birdBody;
    }

    updateWrongId(id) {
        const birdBody = {
            "id": id,
            "category": {
                "id": 72,
                "name": "bird"
            },
            "name": "Parrot",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 721,
                    "name": "Papi"
                }
            ],
            "status": "available"
        }
        return birdBody;
    }

}

export default Data;