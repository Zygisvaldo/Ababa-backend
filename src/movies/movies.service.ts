import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  async create(movieData: Partial<Movie>): Promise<Movie> {
    const movie = this.moviesRepository.create(movieData);
    return await this.moviesRepository.save(movie) as Movie;
  }

  findAll(): Promise<Movie[]> {
    return this.moviesRepository.find();
  }
  
  findOne(id: number): Promise<Movie | undefined> {
    return this.moviesRepository.findOne({ where: { id } });
  }
  
  async update(id: number, updateMovieData): Promise<Movie> {
    const movie = await this.moviesRepository.findOne({ where: { id } });
    this.moviesRepository.merge(movie, updateMovieData);
    return this.moviesRepository.save(movie);
  }
  
  async remove(id: number): Promise<void> {
    const movie = await this.moviesRepository.findOne({ where: { id } });
    await this.moviesRepository.remove(movie);
  }  
}
