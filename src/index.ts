import { IntegrationInvocationConfig } from '@jupiterone/integration-sdk-core';

import {
  getStepStartStates,
  instanceConfigFields,
  validateInvocation,
} from './config';
import { integrationSteps } from './steps';
import { IntegrationConfig } from './types';

export const invocationConfig: IntegrationInvocationConfig<IntegrationConfig> = {
  instanceConfigFields,
  validateInvocation,
  getStepStartStates,
  integrationSteps,
};
