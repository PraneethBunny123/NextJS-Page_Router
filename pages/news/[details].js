import { useRouter } from "next/router"

export default function NewsDetails() {

    const router = useRouter()

    const newsId = router.query.details
    console.log(newsId);
    

    return <h1>{newsId}</h1>
}