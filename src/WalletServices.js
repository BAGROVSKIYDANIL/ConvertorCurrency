const WalletServices = () =>
{
    const getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not feth ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    function getCurrency() {
        // return this.getResource('https://www.cbr-xml-daily.ru/daily_json.js');

                fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(res => res.json())
            .then(data => console.log(data.Valute))
    }

}
export default WalletServices