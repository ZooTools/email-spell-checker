import { DistanceFunction } from '../types';

interface FindClosestDomainProps {
  domain: string;
  domains: string[];
  distanceFunction: DistanceFunction;
  desiredThreshold?: number;
  threshold: number;
}

function findClosestDomain(opts: FindClosestDomainProps): string | undefined {
  const { domain, domains, distanceFunction, threshold } = opts;

  let dist;
  let minDist = Infinity;
  let closestDomain = null;

  if (!domain || !domains) {
    return undefined;
  }

  for (let i = 0; i < domains.length; i++) {
    if (domain === domains[i]) {
      return domain;
    }
    dist = distanceFunction(domain, domains[i]);
    if (dist < minDist) {
      minDist = dist;
      closestDomain = domains[i];
    }
  }

  if (minDist <= threshold && closestDomain !== null) {
    return closestDomain;
  } else {
    return undefined;
  }
}

export default findClosestDomain;
