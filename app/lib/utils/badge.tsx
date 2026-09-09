enum SourceType {
  REDDIT = "reddit",
  GOOGLE_NEWS = "google",
}

export function getBadgeColor(source: string): string {
  switch (source) {
    case SourceType.REDDIT:
      return "bg-red-700 text-white";

    case SourceType.GOOGLE_NEWS:
      return "bg-green-700 text-white";

    default:
      return "bg-gray-500 text-white";
  }
}
