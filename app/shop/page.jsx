import ShopContent from "@/components/shop/ShopContent";


export default async function Shop({searchParams}) {
 
    const params = await searchParams;

    return (
       <ShopContent categoty={params.category} q={params.q} />
    );
}

