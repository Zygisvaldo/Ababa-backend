import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  create(@Body() movieData): Promise<Movie> {
    return this.moviesService.create(movieData);
  }

  @Get()
  findAll(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Movie | undefined> {
    return this.moviesService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMovieData): Promise<Movie> {
    return this.moviesService.update(Number(id), updateMovieData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.moviesService.remove(Number(id));
  }
}
