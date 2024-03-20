import { Genres } from "./typings";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons"
import Link from "next/link";

const GenreDropdown = async () => {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGU5ZmYzZjk0NzJmMzZkZDMxNDI0MWNmODNmYzEwZSIsInN1YiI6IjY1ZmFhOTU5ZDQwZDRjMDE3YzcwMTMyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CVMI9f6YixDs8pmzf1DaVCkDA1FunoH-RP9qlM4XDIk"}`
    },
    next: {
      revalidate: 60 * 60 * 24, 
    }
  };

  const response = await fetch(url, options)
  const data = (await response.json()) as Genres

  return (
   <DropdownMenu>
    <DropdownMenuTrigger className="text-white flex justify-center" >
      Genre <ChevronDownIcon className="ml-1" />
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>Select A Genre</DropdownMenuLabel>
      <DropdownMenuSeparator/>
      {
        data.genres.map(genre => (
          <DropdownMenuItem key={genre.id} >
            <Link href={`/genre/${genre.id}?genre=${genre.name}`} >
              {genre.name}
            </Link>
          </DropdownMenuItem>
        ))
      }
    </DropdownMenuContent>
   </DropdownMenu>
  )
}

export default GenreDropdown