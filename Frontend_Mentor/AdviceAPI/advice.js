class Advice {

    async get() {
        try {
            const response = await fetch("https://api.adviceslip.com/advice");
            const message = await response.json();
            return message;
        }
        catch (error) {
            console.log("Hata oluştu", error);
        }
    }

}