import { imageType } from "@/components/ImageComponent";
import useSWR from "swr";

export function useImage(id: string) {
  const fetcher = <T>(...args: Parameters<typeof fetch>): Promise<T> =>
    fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(`/api/get-image?id=${id}`, fetcher);

  return {
    image: data as imageType,
    isLoading,
    isError: error,
  };
}
