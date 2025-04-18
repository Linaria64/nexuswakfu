// Gestion centralisée de l'état des filtres pour SearchFilter

export type FilterType = 'checkbox' | 'radio' | 'select' | 'tag';

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

export interface FilterDef {
  id: string;
  label: string;
  options: FilterOption[];
  type?: FilterType;
  defaultValue?: string | string[];
}

export type FilterState = Record<string, string | string[]>;

export function initFilterState(filters: FilterDef[]): FilterState {
  const state: FilterState = {};
  filters.forEach(filter => {
    if (filter.defaultValue) {
      state[filter.id] = filter.defaultValue;
    } else {
      state[filter.id] = filter.type === 'checkbox' ? [] : '';
    }
  });
  return state;
}

export function updateFilterState(
  state: FilterState,
  filterId: string,
  value: string,
  type: FilterType,
  checked?: boolean
): FilterState {
  const newState = { ...state };
  if (type === 'checkbox') {
    const arr = Array.isArray(newState[filterId]) ? [...(newState[filterId] as string[])] : [];
    if (checked) {
      if (!arr.includes(value)) arr.push(value);
    } else {
      const idx = arr.indexOf(value);
      if (idx !== -1) arr.splice(idx, 1);
    }
    newState[filterId] = arr;
  } else if (type === 'radio' || type === 'select' || type === 'tag') {
    newState[filterId] = value;
  }
  return newState;
}
