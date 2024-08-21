/*
 * Copyright 2017-2025  [webank-wedpr]
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 *
 */

package com.webank.wedpr.adm.controller;

import com.webank.wedpr.components.meta.agency.model.AgencyRequest;
import com.webank.wedpr.components.meta.agency.service.AgencyService;
import com.webank.wedpr.core.utils.Constant;
import com.webank.wedpr.core.utils.WeDPRResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(
        path = Constant.WEDPR_API_PREFIX + "/meta/agency",
        produces = {"application/json"})
public class AgencyController {
    private static final Logger logger = LoggerFactory.getLogger(AgencyController.class);

    @Autowired private AgencyService agencyService;

    // create the authorization request
    @PostMapping("/queryAgencyMetas")
    public WeDPRResponse queryAgencyMetas(@RequestBody AgencyRequest condition) {
        return agencyService.queryAgencyMetas(condition);
    }
}
