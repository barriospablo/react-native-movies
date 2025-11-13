import { Movie } from "@/infrastructure/interfaces/movie.interface";
import React from "react";
import { FlatList, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;
}

const MovieHorizontalList = ({ className, title, movies }: Props) => {
  return (
    <View className={`${className}`}>
      {title && (
        <View>
          <Text className="text-2xl font-bold px-4 mb-2">{title}</Text>
        </View>
      )}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        data={movies}
      />
    </View>
  );
};

export default MovieHorizontalList;
