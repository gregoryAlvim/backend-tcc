import { Injectable } from '@nestjs/common';
import { parse, differenceInMonths } from 'date-fns';
import { Suggestion } from '@application/entities/suggestion.entity';

interface GetSmartBookingSuggestionRequest {
  date: string;
  goal: number;
  initialValue: number;
}

function calculateValueOfParcels(
  goal: number,
  initialValue: number,
  numberOfMonths: number,
) {
  const result = (goal - initialValue) / numberOfMonths;

  return result;
}

@Injectable()
export class GetSmartBookingSuggestion {
  async execute({
    date,
    goal,
    initialValue,
  }: GetSmartBookingSuggestionRequest): Promise<any> {
    const currentDate = new Date();
    const parsedDate = parse(date, 'dd/MM/yyyy', new Date());
    const numberOfMonths = differenceInMonths(parsedDate, currentDate);

    const numberOfMonthsShortTerm = Math.ceil(0.25 * numberOfMonths);
    const numberOfMonthsMidTerm = Math.ceil(0.5 * numberOfMonths);
    const numberOfMonthsLongTerm = Math.ceil(numberOfMonths);

    const shortSuggestion = new Suggestion({
      name: 'Curto',
      amountParcels: numberOfMonthsShortTerm,
      valueOfParcels: calculateValueOfParcels(
        goal,
        initialValue,
        numberOfMonthsShortTerm,
      ),
    });

    const midSuggestion = new Suggestion({
      name: 'Medio',
      amountParcels: numberOfMonthsMidTerm,
      valueOfParcels: calculateValueOfParcels(
        goal,
        initialValue,
        numberOfMonthsMidTerm,
      ),
    });

    const longSuggestion = new Suggestion({
      name: 'Longo',
      amountParcels: numberOfMonthsLongTerm,
      valueOfParcels: calculateValueOfParcels(
        goal,
        initialValue,
        numberOfMonthsLongTerm,
      ),
    });

    return [shortSuggestion, midSuggestion, longSuggestion];
  }
}
