package cloud.nativ.devex;

import org.eclipse.microprofile.config.inject.ConfigProperty;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.Collections;
import java.util.Map;
import java.util.Optional;

@ApplicationScoped
@Path("message")
public class MessageResource {

    @Inject
    @ConfigProperty(name = "default.message", defaultValue = "Hello World!")
    private String defaultMessage;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getMessage(@QueryParam("text") String text) {
        String message = Optional.ofNullable(text).orElse(defaultMessage);
        Map<String, String> payload = Collections.singletonMap("message", message);
        return Response.ok(payload).build();
    }
}
