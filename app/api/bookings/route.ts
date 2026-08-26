import { NextResponse } from "next/server";

let bookings: any[] = [];

export async function GET() {
  return NextResponse.json(bookings);
}

export async function POST(request: Request) {
  const body = await request.json();

  const newBooking = {
    id: bookings.length + 1,
    name: body.name,
    phone: body.phone,
    tourId: body.tourId,
    people: body.people,
    createdAt: new Date().toISOString(),
  };

  bookings.push(newBooking);

  return NextResponse.json(newBooking, { status: 201 });
}
