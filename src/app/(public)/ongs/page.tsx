'use client'
import { OngsListSection } from "@/components/pages/ongs"
import { TitleWithPaw } from "@/components/TitleWithPaw"
import { mapOngListResponse, useGetOngList } from "@/hooks/useGetOngList"


export default function Ongs(){
    const { data } = useGetOngList(1);
    const ongsData = mapOngListResponse(data?.ong)

    return (
      <div>
        <TitleWithPaw title="ONGs" />
        <OngsListSection ongs={ongsData} />
      </div>
    );
}