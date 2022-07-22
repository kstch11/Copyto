package fel.cvut.order.interceptors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class GeneralInterceptor implements HandlerInterceptor {

    private final Logger LOG = LoggerFactory.getLogger(GeneralInterceptor.class);

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        long startTime = System.currentTimeMillis();

        LOG.info("\n-------- GeneralInterceptor.preHandle ---");
        LOG.info("\nRequest URL: " + request.getRequestURL());
        LOG.info("\nRequest method: " + request.getMethod());
        LOG.info("\nStart Time: " + System.currentTimeMillis());

        request.setAttribute("startTime", startTime);
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        System.out.println("\n-------- GeneralInterceptor.postHandle --- ");
        System.out.println("\nRequest URL: " + request.getRequestURL());
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        System.out.println("\n-------- GeneralInterceptor.afterCompletion --- ");

        long startTime = (Long) request.getAttribute("startTime");
        long endTime = System.currentTimeMillis();
        System.out.println("\nRequest URL: " + request.getRequestURL());
        System.out.println("\nEnd Time: " + endTime);

        System.out.println("\nTime Taken: " + (endTime - startTime));
    }
}
