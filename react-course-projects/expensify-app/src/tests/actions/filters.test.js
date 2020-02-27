import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters'
import moment from 'moment'

test('set start date object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('set end date object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('sort by filter', () => {
    const text = 'something in'
    const action = setTextFilter(text)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: text
    })
})

test('sort by filter', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: '',
    })
})

test('sort by date', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    })
})

test('sort by amount', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    })
})