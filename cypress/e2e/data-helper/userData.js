class UserData {

    headerPayload() {
        const headerBody = {
            "accept": "application/json",
            "Content-Type": "application/json"
        }
        return headerBody;
    }

    bodyPayload() {
        const postData = {
            "id": 918273645,
            "username": "selim",
            "firstName": "Selim",
            "lastName": "Can",
            "email": "selimcan321@email.com",
            "password": "123456asd",
            "phone": "55555555555555555",
            "userStatus": 0
        }
        return postData;
    }

    uploadPayload(id, email, password, phone) {
        const postData = {
            "id": id,
            "username": "selim",
            "firstName": "Selim",
            "lastName": "Can",
            "email": email,
            "password": password,
            "phone": phone,
            "userStatus": 0
        }
        return postData;
    }

    userSing(username, password) {
        const queryBody = {
            "username": username,
            "password": password
        }
        return queryBody;
    }

    listPostData() {
        const postData = [
            {
                "id": 10,
                "username": "zeynep",
                "firstName": "Zeynep",
                "lastName": "Şef",
                "email": "sef@email.com",
                "password": "zey00",
                "phone": "345",
                "userStatus": 0
            },
            {
                "id": 0,
                "username": "canan",
                "firstName": "Canan",
                "lastName": "Yel",
                "email": "yel@email.com",
                "password": "yel11",
                "phone": "567",
                "userStatus": 0
            }
        ]
        return postData;
    }

    arrayPostData() {
        const postData = [
            {
                "id": 4545,
                "username": "dilek",
                "firstName": "Dilek",
                "lastName": "Ay",
                "email": "da@email.com",
                "password": "da123",
                "phone": "456",
                "userStatus": 0
            }
        ]
        return postData;
    }

}

export default UserData;