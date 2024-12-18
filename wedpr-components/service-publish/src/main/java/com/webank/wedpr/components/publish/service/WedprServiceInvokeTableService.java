package com.webank.wedpr.components.publish.service;

import com.webank.wedpr.common.utils.WeDPRResponse;
import com.webank.wedpr.components.publish.entity.request.PublishInvokeSearchRequest;

/**
 * 服务类
 *
 * @author caryliao
 * @since 2024-08-31
 */
public interface WedprServiceInvokeTableService {
    // Note: only the owner can query the record
    WeDPRResponse seachPublishInvokeService(
            String user, String agency, PublishInvokeSearchRequest publishInvokeRequest)
            throws Exception;
}
