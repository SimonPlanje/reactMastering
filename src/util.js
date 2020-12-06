import { 4v as uuidv4 } from "uuid";

function music() {
    return [
        {
            name: "Snowstalgia",
            artist: "invention_",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#242043', '#D6A0B8'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10305"
        },
        {
            name: "Going Back",
            artist: "Swørn",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#355560', '#2A3962'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10310"
        },
        {
            name: "Hidden Structure",
            artist: "Leavv, Flitz&Suppe",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#DD9568', '#AED9B5'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9913"
        },
        {
            name: "Paved Paths",
            artist: "Leavv",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#242043', '#D6A0B8'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9919"
        },
    ]
}

export default music