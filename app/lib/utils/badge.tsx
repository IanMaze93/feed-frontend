enum SourceType {
  REDDIT = "reddit",
  GOOGLE_NEWS = "google",
}

export function getBadgeColor(source: string): string {
  switch (source) {
    case SourceType.REDDIT:
      return "bg-red-900";

    case SourceType.GOOGLE_NEWS:
      return "bg-green-900";

    default:
      return "bg-gray-900";
  }
}
