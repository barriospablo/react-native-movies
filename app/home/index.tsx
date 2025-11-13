import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (topRatedQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="red" size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">HomeScreen</Text>
        {/* <Text>{JSON.stringify(nowPlayingQuery.data)}</Text> */}
        {/* Carousel de imagenes */}
        <MainSlideshow movies={nowPlayingQuery.data ?? []} />
        <MovieHorizontalList
          movies={popularQuery.data ?? []}
          title="Populars"
        />
        <MovieHorizontalList
          movies={topRatedQuery.data ?? []}
          title="Top rated"
        />
        <MovieHorizontalList
          movies={upcomingQuery.data ?? []}
          title="upcomings"
        />
        <MovieHorizontalList
          movies={upcomingQuery.data ?? []}
          title="upcomings"
          className="mb-10"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
