import { NextResponse } from "next/server";

const data = {messagem: "Você busco"}


export async function GET(request) {

    // Aqui dentro você poderia buscar dados via API
    // Vou retorna sobre uma messagem

    return NextResponse.json({...data})
}