import { Suggestion } from '@application/entities/suggestion.entity';

export class SuggestionViewModel {
  static toHTTP(suggestion: Suggestion) {
    return {
      id: suggestion.id,
      name: suggestion.name,
      amountParcels: suggestion.amountParcels,
      valueOfParcels: suggestion.valueOfParcels,
    };
  }
}
